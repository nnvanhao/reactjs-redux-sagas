import React, { useEffect, useState } from 'react';
import {
    Container,
    SelectLang,
    LangMenu,
    LangWrapper,
    LangItem
} from '~/components/SelectLanguage/styles';
import { handleGetItemLocalStorage, handleSetItemLocalStorage } from '~/storages/common';
import { LANGUAGES as languages, LOCAL_STORAGE_KEY_TYPE } from '~/constants/common';
import i18n from 'i18next';

export default function SelectLanguage() {

    const [isSelected, setIsSelected] = useState(false);
    const [itemSelected, setItemSelected] = useState(languages[0]);

    useEffect(() => {
        const localStorageLanguage = JSON.parse(handleGetItemLocalStorage(LOCAL_STORAGE_KEY_TYPE.CURRENT_LANGUAGE));
        if (localStorageLanguage) {
            setItemSelected(localStorageLanguage);
        }
    }, [])

    const handleSelectedLanguage = () => {
        setIsSelected(!isSelected);
    }

    const handleSelectedItem = (item) => {
        handleSetItemLocalStorage(LOCAL_STORAGE_KEY_TYPE.CURRENT_LANGUAGE, JSON.stringify(item));
        setItemSelected(item);
        i18n.changeLanguage(item.key);
    }

    const renderLanguageItem = () => {
        return languages.map(item => {
            return (
                <LangWrapper key={item.key}>
                    <LangItem
                        onClick={() => handleSelectedItem(item)}
                        style={{ backgroundImage: `url(${item.flag})` }}
                    >
                        {item.value}
                    </LangItem>
                </LangWrapper>
            )
        })
    }

    return (
        <Container onClick={() => handleSelectedLanguage()}>
            <SelectLang style={{ backgroundImage: `url(${itemSelected.flag})` }}>
                {itemSelected.value}
            </SelectLang>
            {isSelected && (
                <LangMenu>
                    {renderLanguageItem()}
                </LangMenu>
            )}
        </Container>
    )
}
