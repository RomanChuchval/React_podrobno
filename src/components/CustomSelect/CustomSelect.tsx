import React, {useState} from 'react';
import s from './CustomSelect.module.css'

export type SelectStateType = {
    id: string
    title: string
    description: string
}

type RenderDataType = {
    title: string
    description: string
}


const CustomSelectContainer: React.FC = () => {

    const selectState: SelectStateType[] = [
        {
            id: '1',
            title: 'React',
            description: 'React is a free and open-source front-end JavaScript library'
        },
        {
            id: '2',
            title: 'Redux',
            description: 'Redux is an open-source JavaScript library for managing and centralizing application state.'
        },
        {
            id: '3',
            title: 'HTML',
            description: 'HyperText Markup Language'
        },
        {
            id: '4',
            title: 'Axios',
            description: 'Axios is a promise-based HTTP Client for node.js and the browser. '
        },
        {
            id: '5',
            title: 'JavaScript',
            description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. '
        },
    ]

    const [selectMode, setSelectMode] = useState<boolean>(true)
    const [renderData, setRenderData] = useState<RenderDataType | undefined>(undefined)

    const choseItemForDisplay = (title: string, description: string) => {
        setRenderData({title: title, description: description})
        setSelectMode(true)
    }
    const moveToSelectMode = () => {
        setSelectMode(!selectMode)
    }

    return (
        <div className={s.custom_select_wrapper}>
            <SelectedBlock renderData={renderData}
                           moveToSelectMode={moveToSelectMode}

            />
            <SelectList state={selectState}
                        choseItemForDisplay={choseItemForDisplay}
                        selectMode={selectMode}
            />
        </div>
    );
};

export const CustomSelect = React.memo(CustomSelectContainer)

type SelectBlockPropsType = {
    renderData: RenderDataType | undefined
    moveToSelectMode: () => void
}

export const SelectedBlock: React.FC<SelectBlockPropsType> = (
    {
        renderData,
        moveToSelectMode,
    }
) => {

    const onClickHandler = () => {
        moveToSelectMode()
    }

    return (
        renderData ?
            <div className={s.selected_block_wrapper}
                 onClick={onClickHandler}
            >
                <div>
                    {renderData?.title}
                </div>
                <div>
                    {renderData?.description}
                </div>
            </div>
            :
            <div className={s.selected_block_wrapper}
                 onClick={onClickHandler}>
                Click here and select Item for display
            </div>
    )
}

export type SelectListPropsType = {
    state: SelectStateType[]
    choseItemForDisplay: (title: string, description: string) => void
    selectMode: boolean
}

export const SelectList: React.FC<SelectListPropsType> = (
    {
        state,
        choseItemForDisplay,
        selectMode
    }
) => {

    const finalListClassName = `${selectMode ? s.selectMode : s.select_list_wrapper}`

    let selectedListItems = state.map(el => {
        const onClickHandler = () => {
            choseItemForDisplay(el.title, el.description)
        }
        return (
            <li className={s.list_item} key={el.id} onClick={onClickHandler}>{el.title}</li>
        )
    })

    return (
        <div className={finalListClassName}>
            <ul className={s.items_list}>
                {selectedListItems}
            </ul>
        </div>
    )
}

