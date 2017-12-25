export default {
    devide_10k: function(num) {
        return num >= 10000 ? (num / 10000).toFixed(1) + '万' : num
    }
}
