<script>
    import { view } from "../../../store";

    const changeView = (e) => {
        view.activeRegister(e.target.id)
    }
</script>

<ul>
    <li><a href="#/#" on:click|preventDefault={changeView} id="material">Material</a></li>
    <br>
    <li><a href="#/#" on:click|preventDefault={changeView} id="client">Cliente</a></li>
    <br>
    <li><a href="#/#" on:click|preventDefault={changeView} id="provider">Proveedor</a></li>
    <br>
    <li><a href="#/#" on:click|preventDefault={changeView} id="inbound">Ingreso</a></li>
    <br>
    <li><a href="#/#" on:click|preventDefault={changeView} id="outbound">Salida</a></li>
    <br>
    <li><a href="#/#" on:click|preventDefault={changeView} id="sell">Venta</a></li>
</ul>

<style>
    a {
        color:#457b9d;
        padding:2em;
        margin: 10px 0;
    }
    ul {
        margin-top:2em;
    }
</style>