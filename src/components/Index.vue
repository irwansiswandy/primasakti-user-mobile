<template>
    <Page id="index" class="page">
        <ActionBar flat="true" class="action-bar" :title="title"></ActionBar>
        <StackLayout style="margin: 15">
            <!--
            <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
            <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>
            <Button class="btn btn-primary" @tap="$router.push('/primasakti')">Primasakti</Button>
            -->
            <Label v-model="date_time"></Label>
            <TextField hint="E-mail Address"></TextField>
            <TextField hint="Password"></TextField>
            <Button>Login</Button>
            <Button>Register</Button>
            <Button>Reset Password</Button>
        </StackLayout>
    </Page>
</template>

<style>

</style>

<script>
    import axios from 'axios';

    export default {
        name: 'index',
        data() {
            return {
                title: 'Primasakti',
                date_time: ''
            };
        },
        methods: {
            getDateTime() {
                return axios({
                    url: 'http://192.168.0.91:81/api/date_time',
                    method: 'get'
                }).then((response) => {
                    return this.$set(this, 'date_time', response.data);
                }).catch((error) => {
                    //
                });
            }
        },
        created() {
            return this.getDateTime();
        }
    }
</script>
