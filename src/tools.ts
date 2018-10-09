import moment from 'moment'

function formatTime(arr:string) {
    return moment().format("YYYY-MM-DD HH:mm:ss")
}
export default formatTime
