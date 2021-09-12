import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FcHighPriority } from 'react-icons/fc';
import { handleGetDevToNews } from '~/modules/devto/actions';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

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
            {t('description.part2')}
            {users.map(item => {
                const { name = '' } = item;
                return (
                    <div>
                        <FcHighPriority size={25}/>{name}
                    </div>
                )
            })}
        </div>
    );
}
