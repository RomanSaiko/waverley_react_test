import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles({
    backdrop: {
        zIndex: 9,
        color: '#fff',
    },
    card: {
        '&:hover': {
            boxShadow: '0px 6px 12px 0px rgba(184,178,184,1)',
        },
    },
})

function App() {
    const classes = useStyles()
    const [stories, setStories] = React.useState([])
    const [authors, setAuthors] = React.useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    const randomizeData = (initialData) => initialData.sort(() => 0.5 - Math.random())

    const convertTime = (unixTimestamp) => {
        const milliseconds = unixTimestamp * 1000
        const dateObject = new Date(milliseconds)
        const options = {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
        }
        return dateObject.toLocaleString('en-US', options)
    }

    const sortAscendingly = (storiesArray) => {
        storiesArray.sort((a, b) => parseFloat(a.score) - parseFloat(b.score))
    }

    const getData = async () => {
        try {
            const storiesResponse = await fetch(
                'https://hacker-news.firebaseio.com/v0/topstories.json'
            )
            const allStories = await storiesResponse.json() // parse JSON
            const shuffledStories = randomizeData(allStories)
            const selectedStoriesId = shuffledStories.slice(0, 10)
            const selectedStories = []
            for (let i = 0; i < selectedStoriesId.length; i += 1) {
                const storyResponse = await fetch(
                    `https://hacker-news.firebaseio.com/v0/item/${selectedStoriesId[i]}.json`
                )
                selectedStories.push(await storyResponse.json())
            }
            const sortedSelectedStories = [...selectedStories]
            sortAscendingly(sortedSelectedStories)
            const selectedAuthors = []
            const selectedAuthorsId = sortedSelectedStories.map((item) => item.by)
            for (let i = 0; i < selectedAuthorsId.length; i += 1) {
                const authorResponse = await fetch(
                    `https://hacker-news.firebaseio.com/v0/user/${selectedAuthorsId[i]}.json`
                )
                selectedAuthors.push(await authorResponse.json())
            }
            setStories(sortedSelectedStories)
            setAuthors(selectedAuthors)
        } catch (error) {
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Grid container justify='center' spacing={3}>
                {isError && <div>Something went wrong ...</div>}
                {isLoading ? (
                    <Backdrop className={classes.backdrop} open={isLoading}>
                        <CircularProgress color='inherit' />
                    </Backdrop>
                ) : (
                    <>
                        <Grid item xs={12}>
                            <Typography variant='h3' component='h1' align='center'>
                                10 Hacker News
                            </Typography>
                        </Grid>
                        {stories.map((story, index) => (
                            <Grid key={story.id} item xs={12} md={5}>
                                <Link href={story.url} target='_blank' underline='none'>
                                    <Card className={classes.card}>
                                        <CardContent>
                                            <Typography variant='h5' component='h3'>
                                                {story.title}
                                            </Typography>
                                            <Typography>Story score: {story.score}</Typography>
                                            <Typography component='p'>
                                                Author: {authors[index].id} - {authors[index].karma}
                                            </Typography>
                                            <Typography component='p'>
                                                Published: {convertTime(story.time)}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </Grid>
                        ))}
                    </>
                )}
            </Grid>
        </>
    )
}

export default App
