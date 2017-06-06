import React, {Component} from 'react'
import { Accordion, AccordionItem } from 'react-sanfona'
import {Icon, Grid} from 'semantic-ui-react'
import './Projects.scss'

const projects = [
  {
    title: '177839-SB38_12',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar turpis sem, in finibus nibh semper ut. Nulla ullamcorper odio neque, sit amet vestibulum diam iaculis at. Morbi nec mauris ac mauris ultricies consectetur quis id nisl. Pellentesque maximus purus eu libero condimentum consequat. Etiam molestie sapien vel suscipit blandit. Donec accumsan nec erat vel vulputate. Nam mattis congue auctor. Donec interdum lorem ac malesuada consequat.',
    status: 'started'
  },
  {
    title: 'AB2226709_Test',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar turpis sem, in finibus nibh semper ut. Nulla ullamcorper odio neque, sit amet vestibulum diam iaculis at. Morbi nec mauris ac mauris ultricies consectetur quis id nisl. Pellentesque maximus purus eu libero condimentum consequat. Etiam molestie sapien vel suscipit blandit. Donec accumsan nec erat vel vulputate. Nam mattis congue auctor. Donec interdum lorem ac malesuada consequat.',
    status: 'inProgress'
  },
  {
    title: '17567THX1100',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar turpis sem, in finibus nibh semper ut. Nulla ullamcorper odio neque, sit amet vestibulum diam iaculis at. Morbi nec mauris ac mauris ultricies consectetur quis id nisl. Pellentesque maximus purus eu libero condimentum consequat. Etiam molestie sapien vel suscipit blandit. Donec accumsan nec erat vel vulputate. Nam mattis congue auctor. Donec interdum lorem ac malesuada consequat.',
    status: 'blocked'
  },
  {
    title: 'SomeProject',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar turpis sem, in finibus nibh semper ut. Nulla ullamcorper odio neque, sit amet vestibulum diam iaculis at. Morbi nec mauris ac mauris ultricies consectetur quis id nisl. Pellentesque maximus purus eu libero condimentum consequat. Etiam molestie sapien vel suscipit blandit. Donec accumsan nec erat vel vulputate. Nam mattis congue auctor. Donec interdum lorem ac malesuada consequat.',
    status: 'awaitingApproval'
  },
  {
    title: 'AnotherProject',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar turpis sem, in finibus nibh semper ut. Nulla ullamcorper odio neque, sit amet vestibulum diam iaculis at. Morbi nec mauris ac mauris ultricies consectetur quis id nisl. Pellentesque maximus purus eu libero condimentum consequat. Etiam molestie sapien vel suscipit blandit. Donec accumsan nec erat vel vulputate. Nam mattis congue auctor. Donec interdum lorem ac malesuada consequat.',
    status: 'started'
  }
]

class Projects extends Component {
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Accordion>
        {projects.map((proj) => {
          return (
            <AccordionItem title={`Project ${proj.title}`} slug={proj.title} key={proj.title}>
              <div>
                <div style={{paddingLeft: '15px'}}>
                  <Grid columns={4}>
                    <Grid.Row>
                      <Grid.Column>
                        <h4>
                          <span className="column">Project Status: </span>
                          <span className={proj.status}>{`${proj.status}`}</span>
                        </h4>
                      </Grid.Column>
                      <Grid.Column>
                        <Icon name="check circle" link='/' color='green' size='large'></Icon>
                        <Icon name="pause circle" link='/' size='large'></Icon>
                        <Icon name="remove circle" link='/' color='red' size='large'></Icon>
                        <Icon name="external" color='blue' link='/' size='large'></Icon>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </div>
                <div style={{paddingLeft: '18px', paddingRight: '10px', paddingTop: '5px', paddingBottom: '15px'}}>
                  {`${proj.content}`}
                </div>
              </div>
            </AccordionItem>
          )
        })}
      </Accordion>

    )
  }
}

export default Projects
