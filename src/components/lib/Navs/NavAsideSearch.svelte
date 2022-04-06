<script>
    import { view } from "../../../store";

    const changeView = (e) => {
        view.activeSearch(e.target.id)
    }
</script>

<ul>
    <li><a href="#/#" on:click|preventDefault={changeView} id="materials">Materiales</a></li>
    <br>
    <li><a href="#/#" on:click|preventDefault={changeView} id="inbounds">Ingresos</a></li>
    <br>
    <li><a href="#/#" on:click|preventDefault={changeView} id="outbounds">Egresos</a></li>
    <br>
    <li><a href="#/#" on:click|preventDefault={changeView} id="">Ventas</a></li>
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