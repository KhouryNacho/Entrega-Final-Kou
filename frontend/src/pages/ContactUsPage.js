import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const ContactUsPage = (props) => {

    const initialForm = {
        name: 'Name',
        discord: 'Discord Tag',
                steam: 'Steam id',
        message: 'Message',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holdercontacto">
            <div className="Contact">
                <h2> Contact Us</h2>
                <p>If you are a modder that would like to join our little crew, please don't hesitate in contacting us
                    through this page. We'd love to hear from you
                </p>
                <form action="/contacto" method="post" className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </p>
                    <p>
                        <label htmlFor="discord">Discord ID</label>
                        <input type="text" name="discord" value={formData.discord} onChange={handleChange} />
                    </p>
                    <p>
                        <label htmlFor="steam">Steam User</label>
                        <input type="text" name="steam" value={formData.steam} onChange={handleChange} />
                    </p>
                    <p>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} ></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Send" />
                    </p>
                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
            </div>
            <div className="data">
                <h2> Come visit us!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe quasi dolore ex, similique
                    corrupti cumque inventore dolor est. Fugiat qui neque nihil quis laborum. Est illum deserunt in ut?</p>
                <ul>
                    <li>You can find us in "Da Modding Den" discord in the following link: <a
                        href="https://discord.com/channels/373745291289034763/1008765251208089660">
                        <button>Discord Channel: Da Modding Den</button>
                    </a>
                    </li>
                    <li>Want to check out our team projects? Well they are scattered across a lot of factions, but starting
                        in the official SCM account might be a good place to look.<a
                            href="https://steamcommunity.com/profiles/76561199467938129/myworkshopfiles/?appid=1142710">
                            <button>Steam Profile: Team SCM</button>
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default ContactUsPage;