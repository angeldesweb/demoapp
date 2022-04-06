<script>
    //@ts-nocheck
    import { onMount } from 'svelte';
    import { getInbounds } from '../../../tools/api/inbounds';
    import { getProviders } from '../../../tools/api/providers';
    import { Datatable } from 'svelte-simple-datatables';
    import moment from "moment/min/moment-with-locales";
    moment.locale('es')

    const settings = {
        css:true,
        labels: {
            search: 'Buscar...',    // search input placeholer
            filter: 'Filtrar',       // filter inputs placeholder
            noRows: 'No se encontraron coincidencias',
            info: 'Mostrando de {start} a {end} resultados de {rows} registros',
            previous: 'Anterior',
            next: 'Siguiente',       
        },
    }
    $: data = [];
    const fetchInbounds = async () => {
        try {
            const req = await getInbounds();
            const provs = await getProviders();
            const response = req.map(doc => {
            let pro = doc.provider.split('/')[2];
            doc.provider = provs.filter(doc => doc.id === pro);
            let date = doc.date.toDate()
            doc.date = moment(date).format('dddd MM y');
            doc.materials = doc.inbounds.length;
            return doc;
        });
        data = response;
        return response;
        } catch (error) {
            console.log(error);
            return error;
        }
    }
    $: console.log(data);
    let rows;

    const handleClick = (e) => {
        console.log(e.target.parentNode.id);
    }
    let promise = fetchInbounds();
    onMount(() => {
        promise = fetchInbounds();
    })
</script>

{#await promise}
<h3 class="text-primary">Cargando...</h3>
{:then}
<Datatable {settings} {data} bind:dataRows={rows}>
    <thead>
        <th data-key="name">Lote N°</th>
        <th data-key="tipo">N° de materiales</th>
        <th data-key="account">Fecha</th>
        <th data-key="unitprice">Proveedor</th>
    </thead>
    <tbody>
    {#if rows}
        {#each $rows as row}
        <tr 
        id={row.lote}
        class:bg-error={!row.payed}
        class="text-white"
        class:bg-success={!!row.payed}
        on:click={handleClick}>
            <td>{row.lote}</td>
            <td>{row.materials}</td>
            <td>{row.date}</td>
            <td>{row.provider[0].name}</td>
        </tr>
        {/each}
    {/if}
    </tbody>
</Datatable>
{:catch error}
<h3 class="text-primary">Algo ha salido mal</h3>
{/await}

<style>

    td{
        text-align:center;
        padding:4px 0;
    }
    tr {
        border: 1px solid white;
    }
    td:hover {
        cursor:pointer
    }
</style>