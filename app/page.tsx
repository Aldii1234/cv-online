import Head from "next/head";

export default function Home() {
  const dataMahasiswa = [
    { no: 1, nim: "220101", nama: "Ahmad", gender: "L", prodi: "Informatika", kelas: "TI-1A", semester: 4, alamat: "Bandung", hobby: "Membaca", citacita: "Programmer" },
    { no: 2, nim: "220102", nama: "Siti", gender: "P", prodi: "Sistem Informasi", kelas: "SI-2B", semester: 2, alamat: "Jakarta", hobby: "Menulis", citacita: "Data Analyst" },
    { no: 3, nim: "220103", nama: "Budi", gender: "L", prodi: "Teknik Komputer", kelas: "TK-3A", semester: 6, alamat: "Surabaya", hobby: "Gaming", citacita: "Cyber Security" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Head>
        <title>Data Mahasiswa</title>
      </Head>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">Data Mahasiswa</h1>

        {/* Desktop View (Table) */}
        <div className="hidden md:block">
          <table className="w-full bg-white border border-gray-300 shadow-md">
            <thead className="bg-blue-500 text-white text-sm">
              <tr>
                <th className="border px-2 py-2">No</th>
                <th className="border px-2 py-2">NIM</th>
                <th className="border px-2 py-2">Nama</th>
                <th className="border px-2 py-2">Gender</th>
                <th className="border px-2 py-2">Prodi</th>
                <th className="border px-2 py-2">Kelas</th>
                <th className="border px-2 py-2">Semester</th>
                <th className="border px-2 py-2">Alamat</th>
                <th className="border px-2 py-2">Hobby</th>
                <th className="border px-2 py-2">Cita-cita</th>
              </tr>
            </thead>
            <tbody className="text-xs">
              {dataMahasiswa.map((mhs, index) => (
                <tr key={index} className="text-center bg-gray-50 hover:bg-blue-100">
                  <td className="border px-2 py-2">{mhs.no}</td>
                  <td className="border px-2 py-2">{mhs.nim}</td>
                  <td className="border px-2 py-2">{mhs.nama}</td>
                  <td className="border px-2 py-2">{mhs.gender}</td>
                  <td className="border px-2 py-2">{mhs.prodi}</td>
                  <td className="border px-2 py-2">{mhs.kelas}</td>
                  <td className="border px-2 py-2">{mhs.semester}</td>
                  <td className="border px-2 py-2">{mhs.alamat}</td>
                  <td className="border px-2 py-2">{mhs.hobby}</td>
                  <td className="border px-2 py-2">{mhs.citacita}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View (Grid) */}
        <div className="md:hidden space-y-4">
          {dataMahasiswa.map((mhs, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md border">
              <h2 className="text-blue-600 font-bold text-lg">{mhs.nama} ({mhs.nim})</h2>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p><strong>Gender:</strong> {mhs.gender === "L" ? "Laki-laki" : "Perempuan"}</p>
                <p><strong>Prodi:</strong> {mhs.prodi}</p>
                <p><strong>Kelas:</strong> {mhs.kelas}</p>
                <p><strong>Semester:</strong> {mhs.semester}</p>
                <p><strong>Alamat:</strong> {mhs.alamat}</p>
                <p><strong>Hobby:</strong> {mhs.hobby}</p>
                <p><strong>Cita-cita:</strong> {mhs.citacita}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
