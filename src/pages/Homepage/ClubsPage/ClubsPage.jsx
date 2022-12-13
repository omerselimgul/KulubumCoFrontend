import React, { useEffect, useState } from 'react';
import styles from './club.module.scss';
import horsePhoto from '../../../asset/image_5.png';
import { DuyuruSearchNav } from '../../../components/DuyuruNav/DuyuruNav';
import Card from '../../../components/Card/Card';
import api from '../../../api';
import Spinner from '../../../components/Spinner';
// import educationLogo from '../../../asset/education.jpg';

const ClubsPage = () => {
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.clubs
      .getClub(page, 10)
      .then((res) => {
        setClubs(res.data.data);
      })
      .catch((err) => console.log(err.response.data.message))
      .finally(() => setLoading(false));
  }, [page]);

  useEffect(() => {
    api.clubs.search(search).then((res) => {
      setPage(1);
      setClubs(res.data.data);
    });
  }, [search]);

  return (
    <main className={styles.clubs}>
      <DuyuruSearchNav title="Kulüpler" onChange={setSearch} searchQ={search} placeholder="Klüp ara" />
      <div className={styles.clubsContent}>
        {loading ? (
          <Spinner position="center" />
        ) : (
          clubs.map((club) => (
            <Card key={club.ClubId}>
              <Card.Img photo={horsePhoto} />
              <Card.Body>
                <Card.Label> {club.ClubId}</Card.Label>
                <Card.Title>{club.ClubName}</Card.Title>
                <Card.Owner>{club.UniversityName}</Card.Owner>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </main>
  );
};

export default ClubsPage;
