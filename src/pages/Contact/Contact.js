import React from 'react';
import * as emailjs from 'emailjs-com';

import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Field, Label, Control, Input, Icon, Button, Textarea, Notification } from 'rbx';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import './Contact.css';

import { Grid, Typography, TextField} from '@material-ui/core';

import resumeData from '../../utils/resumeData';
import CustomButton from '../../components/Button/Button'

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

class Contact extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Shams',
      message: message
    };
    emailjs.send(
      'service_iwwgtri',
      'template_kq2lz78',
       templateParams,
      'user_y5p7TyXeohpuL4BH6kHM9'
    );
    alert('Your message has been sent successfully. I will contact you soon.');
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, message} = this.state;



    return (
        <div>
        {/* Contact Form*/}
        <Grid container justify='space-between' className='section section_contact'>
            <Grid item className='section_title section_contact' xs={12} lg={5}>
                <span class='spantitle'>aaaaaaaaaaaaaa.</span>

                {/*start*/}
                <Typography variant='h6' className='section_title_text'>Contact Form</Typography>

                      <form onSubmit={this.handleSubmit}>
            <Grid container justify='space-between'>
                        <Grid item className="mgR-30-xs" xs={12} sm={6}>
                              <TextField fullWidth  label={'Your name'} value={name}
                              onChange={event => {
                                const { value } = event.target;
                                this.setState({ name: value });
                              }} />
                        </Grid>

                        <Grid item className="mgR-30" xs={12} sm={5}>

                              <TextField fullWidth  label={'john.doe@gmail.com'} value={email}
                                              onChange={event => {
                                                const { value } = event.target;
                                                this.setState({ email: value });
                                              }} />

                        </Grid>

                        <Grid item className="mgR-30" xs={12}>
                              <Field>
                          <Label style={{fontWeight: '600', marginTop: '15px'}}>Message</Label>
                          <Control>
                              <TextField fullWidth  label={'Write your message here'} value={message}
                                              onChange={event => {
                                                const { value } = event.target;
                                                this.setState({ message: value });
                                              }} multiline rows={4} />
                          </Control>
                          </Field>
                        </Grid>

                        <Grid item xs={12} className='top_20'>
                              <Field kind="group">
                              <Control>
                                  <Button className='custom_btn'>Send</Button>
                              </Control>
                              </Field>
                        </Grid>
                        </Grid> 
                      </form>

            </Grid>

            <Grid item className='section_title section_contact' xs={12} lg={6}>
                <span class='spantitle'>aaaaaaaaaaaaaaaaaaaaa</span>
                <Typography variant='h6' className='section_title_text'>Contact Information</Typography>
                <div class='top_20'>
                    {resumeData.contactinformation.map(information => (
                        <>
                            <Typography>{information.title}</Typography>
                            <span>{information.info}</span>
                        </>
                    ))}
                </div>
            </Grid>
            

            <Grid item xs={12}>
                <MapContainer center={[45.76939, 4.86376]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[45.76939, 4.86376]}>
                        <Popup>
                            That is where i live !
                        </Popup>
                    </Marker>
                </MapContainer>
            </Grid>
        </Grid>
    </div>
    );
  }
}

export default Contact;