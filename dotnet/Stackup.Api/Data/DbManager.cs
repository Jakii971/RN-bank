using System.Data;
using System.Text.RegularExpressions;
using MySql.Data.MySqlClient;

public class DbManager
{
    private readonly string connectionString;
    private readonly MySqlConnection _connection;
    public DbManager(IConfiguration configuration) //constuctor
    {
        connectionString = configuration.GetConnectionString("DefaultConnection");
        _connection = new MySqlConnection(connectionString);
    }

    //! GET ALL
    public List<Materi> GetAllMateris()
    {
        List<Materi> materiList = new List<Materi>();
        try
        {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "SELECT * FROM Materi";
                MySqlCommand command = new MySqlCommand(query, connection);
                connection.Open();
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Materi materi = new Materi
                        {
                            id = Convert.ToInt32(reader["id"]),
                            nama = reader["Nama"].ToString(),
                            deskripsi = reader["Deskripsi"].ToString(),
                            trainer = Convert.ToInt32(reader["Trainer"])
                        };
                        materiList.Add(materi);
                    };
                };
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        return materiList;
    }
    //! CREATE
    public int CreateMateri(Materi materi)
    {
        using (MySqlConnection connection = _connection)
        {
            string query = "INSERT INTO materi (nama, deskripsi, trainer) VALUES (@Nama, @Deskripsi, @Trainer)";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Nama", materi.nama);
                command.Parameters.AddWithValue("@Deskripsi", materi.deskripsi);
                command.Parameters.AddWithValue("@Trainer", materi.trainer);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }

    //! UPDATE
    public int UpdateMateri(int id, Materi materi)
    {
        using (MySqlConnection connection = _connection)
        {
            string query = "UPDATE materi SET nama = @Nama, deskripsi = @Deskripsi, trainer = @Trainer WHERE id = @Id";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Nama", materi.nama);
                command.Parameters.AddWithValue("@Deskripsi", materi.deskripsi);
                command.Parameters.AddWithValue("@Trainer", materi.trainer);
                command.Parameters.AddWithValue("@Id", materi.id);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }

    //! DELETE
    public int DeleteMateri(int id)
    {
        using (MySqlConnection connection = _connection)
        {
            string query = "DELETE FROM materi WHERE id = @Id";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Id", id);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }

    //! Bank
    public List<Riwayat> GetAllRiwayats()
    {
        List<Riwayat> riwayatList = new List<Riwayat>();
        try
        {
            using (MySqlConnection connection = new MySqlConnection(connectionString))
            {
                string query = "SELECT * FROM riwayat";

                MySqlCommand command = new MySqlCommand(query, connection);
                connection.Open();
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Riwayat riwayat = new Riwayat
                        {
                            nama = reader["Nama"].ToString(),
                            noRekening = reader["NoRekening"].ToString(),
                            nominal = Convert.ToInt32(reader["Nominal"]),
                        };
                        riwayatList.Add(riwayat);
                    };
                };
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
        return riwayatList;
    }

    //! CREATE
    public int CreateRiwayat(Riwayat riwayat)
    {
        using (MySqlConnection connection = _connection)
        {
            string query = "INSERT INTO riwayat (nama, noRekening, nominal) VALUES (@Nama, @NoRekening, @Nominal)";
            using (MySqlCommand command = new MySqlCommand(query, connection))
            {
                command.Parameters.AddWithValue("@Nama", riwayat.nama);
                command.Parameters.AddWithValue("@NoRekening", riwayat.noRekening);
                command.Parameters.AddWithValue("@Nominal", riwayat.nominal);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }
    }
}