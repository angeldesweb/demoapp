<script>
    import FormMaterial from "../../lib/Forms/FormMaterial.svelte";
    import { view } from "../../../store";
    import NavAsideRegister from "../../lib/Navs/NavAsideRegister.svelte";
    import FormCliente from "../../lib/Forms/FormCliente.svelte";
    import FormProvider from "../../lib/Forms/FormProvider.svelte";
    import FormInboundBox from "../../lib/Forms/FormInboundBox.svelte";

    $: forms = {
        material:FormMaterial,
        client:FormCliente,
        provider:FormProvider,
        inbound:FormInboundBox
    }
</script>

<NavAsideRegister/>
<div class="form-box">
    <svelte:component this={forms[$view.register]} />   
</div>

<style>
    .form-box {
        height:100%;
        padding:2em;
        width:80%;
    }
</style>