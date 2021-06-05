

export default function currency(number) {
    return new Inlt.NumberFormat('vn').format(number) + 'vnđ'
}
