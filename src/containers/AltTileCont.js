
import React from 'react'
import styled from 'styled-components'
import classnames from 'classnames'
import AltTile from '../components/AltTile';

function btnTxtStle(props){
    if(props.theme.text){ return props.theme.text }
}



const AltTileCont = (props)=> <section  className={classnames(props.className)}>
                                  <AltTile 
                                   title = "Lorem Ipsum"
                                   copy = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam voluptua."
                                   imgSrc = "https://unsplash.it/600/300?image=95"
                                   />
                                   <AltTile 
                                   title = "Lorem Ipsum"
                                   copy = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam voluptua."
                                   imgSrc = "https://unsplash.it/600/300?image=98"
                                   />
                                   <AltTile 
                                   title = "Lorem Ipsum"
                                   copy = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam voluptua."
                                   imgSrc = "https://unsplash.it/600/300?image=99"
                                   />
                            </section>


export default styled(AltTileCont)`
width:100%;
`