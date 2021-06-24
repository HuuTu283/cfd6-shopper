const mapApi = {
    location() {
        return fetch(`/localStore.json`, {
            method: 'GET',
        }).then(res => res.json())
    }
}

export default mapApi;