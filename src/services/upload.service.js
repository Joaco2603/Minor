import axios from 'axios'
import API from '../utils/const'

class UploadService {
    getImages() {

    }

    sendImages(name, file){
        const form = new FormData()
        form.append('name', name)
        form.append('file', file, 'form-data')

        return axios.post(`$aPI.URL)`)

    }
}
