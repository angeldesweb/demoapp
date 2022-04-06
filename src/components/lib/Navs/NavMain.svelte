<script>
    import { logOut } from "../../../tools/api/session";
    import { router, session } from "../../../store";

    
    const navigate = (e) => router.navigateTo(e.target.id);

    const closeSession = async () => {
        await logOut();
        session.closeSession()
    }
</script>

<ul class="menu nav">
    <li><a href="#/#" id="register" class="text-light" on:click|preventDefault={navigate}>Registrar</a></li>
    <li><a href="#/#" id="search" class="text-light" on:click|preventDefault={navigate}>Consultar</a></li>
    <!--li><a href="#/#" id="account" class="text-light" on:click|preventDefault={navigate}>Perfil</a></li-->
    <li><a href="#/#" class="text-light" on:click|preventDefault={closeSession}>Cerrar</a></li>
</ul>

<style>
    .menu > li {
        display:inline;
        padding: 0 .5em;
    }
    .menu > li > a {
        text-decoration:none;
    }
</style>