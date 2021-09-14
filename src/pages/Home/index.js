import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleGetDevToNews } from '~/modules/devto/actions';
import { useTranslation } from 'react-i18next';
import ThemeMode from '~/components/ThemeMode';
import SelectLanguage from '~/components/SelectLanguage';

export default function Home() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { users = [] } = useSelector(state => state.devTo);

    useEffect(() => {

        dispatch(handleGetDevToNews());
    }, [])

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', alignContent: 'center' }}>
                <ThemeMode />
                <SelectLanguage />
            </div>
            <div style={{ marginTop: 20 }}>
                <p>{t('description.part2')}</p>
                {users.map(item => {
                    const { name = '' } = item;
                    return (
                        <p>{name}</p>
                    )
                })}
            </div>
        </div>
    );
}
