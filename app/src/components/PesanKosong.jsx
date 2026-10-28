export default function PesanKosong({  
    pesan = "Tidak ada agenda yang tersedia, silahkan coba masukan kategori yang berbeda.",

}) {
    return (
        <div id="status" role="status" >
            <p>{pesan}</p> 
        </div>
    )
}