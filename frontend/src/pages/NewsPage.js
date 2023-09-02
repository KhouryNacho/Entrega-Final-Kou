import { useState, useEffect } from "react";
import axios from 'axios';
import NovedadItem from "../components/news/NovedadItem";

const NewsPage = (prop) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };
        cargarNovedades();
    }, []);
    return (
        <section className="holder">
            <h2>Novedades</h2>
            {
                loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.project_id}
                        project_description={item.project_description}
                        project_members={item.project_members}
                        project_img_id={item.project_img_id}
                        project_status={item.project_status} />)
                )
            }
        </section>
    )
};
export default NewsPage;