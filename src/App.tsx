import { useState } from 'react'
import AddArtists from './AddArtists'
import './App.css'
import List from './List'

export interface IinitialArtists {
    id: number
    name: string
}
const initialArtists: IinitialArtists[] = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
]

function App() {
    //! State
    let nextId = 3
    const [artists, setArtists] = useState(initialArtists)
    console.log('artists', artists)
    const [addArtists, setAddArtists] = useState<string>('')

    //! Function
    const handleAddOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setAddArtists(value)
    }
    const handleClickAddArtists = () => {
        setAddArtists('')
        setArtists([...artists, { id: nextId++, name: addArtists }])
    }
    const handleDeleteArtists = (id: number) => {
        setArtists(artists.filter((item) => item.id !== id))
    }
    const handleEditArtists = (
        id: number,
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setArtists(
            artists.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        name: e.target.value,
                    }
                } else {
                    return item
                }
            })
        )
    }

    //! Return
    return (
        <ul>
            <h1>Inspiring sculptors:</h1>
            <AddArtists
                addArtists={addArtists}
                handleAddOnChange={handleAddOnChange}
                handleClickAddArtists={handleClickAddArtists}
            />

            <List
                artists={artists}
                handleDeleteArtists={handleDeleteArtists}
                handleEditArtists={handleEditArtists}
            />
        </ul>
    )
}

export default App
