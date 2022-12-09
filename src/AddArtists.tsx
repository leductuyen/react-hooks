import { ChangeEvent } from 'react'

export interface IAddArtists {
    addArtists: string
    handleAddOnChange?: (e: ChangeEvent<HTMLInputElement>) => void
    handleClickAddArtists: () => void
}

const AddArtists = ({
    addArtists,
    handleAddOnChange,
    handleClickAddArtists,
}: IAddArtists) => {
    return (
        <>
            <input value={addArtists} onChange={handleAddOnChange} />
            <button onClick={handleClickAddArtists}>Add</button>
        </>
    )
}
export default AddArtists
