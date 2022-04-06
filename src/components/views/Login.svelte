<script>
    import Base from "../layouts/Base.svelte";
    import Header from "../layouts/Header.svelte";
    import SingleContent from "../layouts/SingleContent.svelte";
    import AppFooter from "../lib/Footer/AppFooter.svelte";
    import FormLogin from "../lib/Forms/FormLogin.svelte";
    import TittleApp from "../lib/Tittle/TittleApp.svelte";
</script>
<Base>
    <Header slot="header">
        <TittleApp slot="title" />
    </Header>
    <SingleContent slot="content">
        <div class="card">
            <FormLogin/>
        </div>
    </SingleContent>
    <AppFooter slot="footer" />
</Base>