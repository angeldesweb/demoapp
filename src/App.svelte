<script>
import 'chota'
import Login from "./components/views/Login.svelte";
import Main from './components/views/Main.svelte';
import { session } from './store';
</script>

<svelte:component style="width:100vw;" this={$session.isAuth ? Main : Login} />

<style>
    :global(:root) {
        --color-primary:#023e8a;
        --secondary-color:#e9d8a6;
    }
</style>