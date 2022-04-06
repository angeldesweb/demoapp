<script>
    import { router } from "../../store";
    import Base from "../layouts/Base.svelte";
    import Header from "../layouts/Header.svelte";
    import AppFooter from "../lib/Footer/AppFooter.svelte";
    import NavMain from "../lib/Navs/NavMain.svelte";
    import TittleAppNav from "../lib/Tittle/TittleAppNav.svelte";
    import Home from "./screens/Home.svelte";
    import Register from "./screens/Register.svelte";
    import Seacrh from "./screens/Seacrh.svelte";

    $: console.log($router)
    let components = {
        home:Home,
        register:Register,
        search:Seacrh
    }
</script>
<Base>
    <Header slot="header">
        <TittleAppNav slot="title" />
        <NavMain slot="content" />
    </Header>
    <svelte:component this={components[$router]} slot="content" />
    <AppFooter slot="footer" />
</Base>