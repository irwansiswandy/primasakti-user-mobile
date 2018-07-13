<template>
  <Page id="index" class="page">
    <ActionBar class="action-bar" :title="title"></ActionBar>

    <StackLayout>
      <Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
      <Button class="btn btn-primary" @tap="$router.push('/hello')">Hello World</Button>
      <Button class="btn btn-primary" @tap="$router.push('/primasakti')">Primasakti</Button>
    </StackLayout>

  </Page>
</template>

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
                    url: 'http://192.168.0.91:81/date_time',
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
