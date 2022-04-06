<script>
import 'chota'
import Login from "./components/views/Login.svelte";
import Main from './components/views/Main.svelte';
import { session } from './store';
</script>

<svelte:component style="width:100vw;" this={$session.isAuth ? Main : Login} />
