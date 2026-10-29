export default function PesanKosong({  
    pesan = "Tidak ada agenda yang ditemukan, coba tambahkan kategori lain atau ubah kata kunci pencarian.",

}) {
    return (
        <div id="status" role="status" >
            <p>{pesan}</p> 
        </div>
    )
}