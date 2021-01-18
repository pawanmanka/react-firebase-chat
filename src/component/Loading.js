import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

export default function Loading () {
  return(
    <div>
        <Segment>
            <Dimmer active>
                <Loader size='large' indeterminate>Preparing Files</Loader>
            </Dimmer>        
        </Segment>
    </div>
  );
}


