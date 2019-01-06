<template>
    <div>
        <h1>FTP</h1>
        <h3>上传</h3>
        <div>
            <el-upload
                ref="upload"
                name="file"
                drag
                action="/api/uploadFile"
                :on-success="afterUpload"
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
        </div>
        <h3>下载</h3>
        <div>
            <ul>
                <li
                    v-for="item in file_list"
                    :key="item.id"
                    style="margin: 5px; list-style: none"
                >
                    <i class="el-icon-document"></i>
                    {{item}}
                    <el-button
                        size="mini"
                        round
                        @click="downloadFile(item)"
                    >下载</el-button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            file_list: [],
        }
    },
    created() {
        this.getFilesList();
    },
    methods: {
        getFilesList() {
            let v = this;
            axios.post('/api/getFilesList', {})
                .then(function (response) {
                    v.file_list = response.data['list']
                })
                .catch(function (error) {
                    // eslint-disable-next-line
                    console.log(error);
                });
        },
        downloadFile(filename) {
            let file_url = '/api/downloadFile/' + filename;
            window.open(file_url);
        },
        afterUpload() {
            this.getFilesList();
            this.$refs.upload.clearFiles();
        }
    }
}
</script>