import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleGetDevToNews } from '~/modules/devto/actions';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import ThemeMode from '~/components/ThemeMode';

export default function Home() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { users = [] } = useSelector(state => state.devTo);

    useEffect(() => {
        i18n.changeLanguage('vi');
        dispatch(handleGetDevToNews());
    }, [])

    return (
        <div>
            <ThemeMode />
            <p>{t('description.part2')}</p>
            {users.map(item => {
                const { name = '' } = item;
                return (
                    <p>{name}</p>
                )
            })}
        </div>
    );
}
