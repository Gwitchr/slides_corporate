import React from 'react';
import {Card,CardBody,CardHeader,CardText,CardFooter,Button} from 'reactstrap';

export const SummaryEl =(props)=>{
  const {
    empresa,
    tel,
    mail,
    nombre,
    apellidos,
    facturacion,
    seguridad,
    segReq,
    tipoPersona,
    licitacion,
    licencias,
    cursos,
    auditoria,
    regularizacion,
    declaracion,
    otrosServ,
    info:{title}} = props
  const adicionales = {
    licitacion,
    licencias,
    cursos,
    auditoria,
    regularizacion,
    declaracion
  }
  return(
    <Card className = "text-center mb-3 animated fadeInPlace" >
        <CardHeader>
            {title}
        </CardHeader>
        <CardBody>
          <CardText className="animated fadeInPlace">
              <i className="fas fa-user"/>&nbsp; {nombre.replace(/\s/g, '')}&nbsp;{apellidos.replace(/\s/g, '')}<Button onClick={()=>props.setPossibleQ(7)} color="link">Editar</Button>
              &nbsp;&nbsp;
              <i className="fas fa-briefcase"/>&nbsp;Persona:&nbsp;{tipoPersona}
              <Button onClick={()=>props.setPossibleQ(1)} color="link">Editar</Button>
              <hr/>

              <i className="fas fa-building"/>&nbsp;Empresa:&nbsp;{empresa}
              <Button onClick={()=>props.setPossibleQ(11)} color="link">Editar</Button>
              <hr/>

              <i className="fas fa-file"/>&nbsp;Facturación mensual:&nbsp;{facturacion}
              <Button onClick={()=>props.setPossibleQ(2)} color="link">Editar</Button>
              <i className="fas fa-hospital"/>&nbsp;Seguridad social:&nbsp;{
                segReq
                  ?seguridad
                  :'No requiere'
              }
              <Button onClick={()=>props.setPossibleQ(4)} color="link">Editar</Button>
              <hr/>
              Adicionales:
              <br/>

              {//eslint-disable-next-line
                Object.keys(adicionales).map((el,i)=>{
                if(adicionales[el]){
                  return (
                    <span key={i}>
                      <i className="fas fa-check"/>&nbsp;{el}&nbsp;
                    </span>
                  )
                }
              })}
              <Button onClick={()=>props.setPossibleQ(4)} color="link">Editar</Button>
              <br/>
              {otrosServ}
              <Button onClick={()=>props.setPossibleQ(6)} color="link">Editar</Button>

              <hr/>
              <i className="fas fa-phone"/>&nbsp;Teléfono:&nbsp;{tel}
              <Button onClick={()=>props.setPossibleQ(10)} color="link">Editar</Button>
              <i className="fas fa-at"/>&nbsp;Mail:&nbsp;{mail}
              <Button onClick={()=>props.setPossibleQ(9)} color="link">Editar</Button>
              <br/>
              {/* <div>
                <Button form="formQuoter" size="lg" className="animated fadeInUp mb-1" color="primary" outline="outline">Confirmar&nbsp;
                  <i className="fas fa-rocket"/></Button>

              </div> */}

            </CardText>

        </CardBody>
        <CardFooter>
          <CardText>
            ¿Duda o comentario?
            <br/>
            <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5212225313392?text=Hola">Cuéntanos por Whatsapp
              <i className="fab fa-whatsapp"/>
            </a>
          </CardText>
        </CardFooter>
        </Card>)
}
