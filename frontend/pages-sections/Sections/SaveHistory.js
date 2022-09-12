import React from 'react'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'

// @material-ui/icons

// core components
import GridContainer from '/components/Grid/GridContainer.js'
import GridItem from '/components/Grid/GridItem.js'
import CustomInput from '/components/CustomInput/CustomInput.js'
import Button from '/components/CustomButtons/Button.js'

import styles from '/styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js'

import ImageThree from '../../public/img/histories.jpg'
import Image from 'next/image'

import InputAdornment from '@material-ui/core/InputAdornment'
import Category from '@material-ui/icons/Category'
import Face from '@material-ui/icons/Face'
import Chat from '@material-ui/icons/Chat'
import TitleIcon from '@material-ui/icons/Title'
import LinkIcon from '@material-ui/icons/Link'
import Link from 'next/link'

const useStyles = makeStyles(styles)

const SaveHistory = () => {
  const classes = useStyles()

  const InputHistory = ({ labelText = 'Type here', Icon }) => {
    return (
      <CustomInput
        labelText={labelText}
        id="first"
        formControlProps={{
          fullWidth: true,
        }}
        inputProps={{
          type: 'text',
          endAdornment: (
            <InputAdornment position="end">
              <Icon className={classes.inputIconsColor} />
            </InputAdornment>
          ),
        }}
      />
    )
  }

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Save your Amazing History!</h2>
      <GridContainer justify="center">
        <GridItem
          xs={12}
          sm={12}
          md={6}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <h4 className={classes.description}>
            <GridContainer style={{ margin: '10px' }}>
              <InputHistory labelText="Title" Icon={TitleIcon} />
              <InputHistory labelText="Description" Icon={Chat} />
              <InputHistory labelText="URL image" Icon={LinkIcon} />
              <InputHistory labelText="Historiographer" Icon={Face} />
              <InputHistory labelText="Category" Icon={Category} />
            </GridContainer>
          </h4>
          <Link href="/collection">
            <Button
              color="primary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: '30px' }}
            >
              <i className="fas fa-save" style={{ paddingRight: 12 }} />
              Save
            </Button>
          </Link>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} style={{ marginTop: '10px' }}>
          <div
            style={{
              borderRadius: '50%',
              width: '300px',
              height: '300px',
              position: 'relative',
              overflow: 'hidden',
              margin: '30px auto',
            }}
          >
            <Image
              layout="fill"
              src={ImageThree.src}
              alt="histories of communities"
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  )
}

export default SaveHistory
