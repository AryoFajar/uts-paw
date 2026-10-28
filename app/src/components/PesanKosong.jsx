export default function PesanKosong({  
    pesan = "Tidak ada agenda yang tersedia, silahkan coba masukan kategori yang berbeda.",

}) {
    return (
        <div role="status" >
            <p>{pesan}</p> 
        </div>
    )
}