import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    Container,
} from '~/components/GithubTrending/styles';
import { handleGetGithubTrending } from '~/modules/github/actions';
import i18n from 'i18next';
import { IoLogoJavascript, IoLogoPython } from 'react-icons/io';
import { SiJava, SiTypescript, SiJupyter, SiHtml5, SiCplusplus } from 'react-icons/si';
import { AiFillStar } from 'react-icons/ai';
import { kFormatter } from '~/utils/formats';
import { FiAlertOctagon } from "react-icons/fi";
import GoLangIcon from '~/assets/icons/golang-ic.svg';

export default function GithubTrending() {
    const dispatch = useDispatch();
    const [isSelected, setIsSelected] = useState(false);

    const { githubTrendingList = []} = useSelector(state => state.github);

    useEffect(() => {
        dispatch(handleGetGithubTrending());
    }, [])

    const renderGithubTrendingItem = () => {
        const githubTrendingListSort = githubTrendingList.sort((a, b) => b.stars - a.stars);
        
        return githubTrendingListSort.map(item => {
            const { author, avatar, description, language, languageColor, name, stars, url } = item;
            return (
                <div key={item.url} style={{ width: 318, height: 550, borderRadius: 16, background: '#fff', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)' }}>
                    <div style={{ height: 310, background: '#D2EBF7', borderRadius: '10px 10px 1px 1px' }}>
                        <div style={{ height: '100%', width: '100%', borderRadius: '10px 10px 1px 1px', backgroundImage: `url(${avatar})`, backgroundRepeat: 'round', position: 'relative' }}>
                        </div>
                    </div>
                    <div style={{ height: 240, padding: 15, display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {renderProgramLanguage(language, languageColor)}
                                    <p style={{ marginLeft: 5 }}>{language ? language : 'Unknown'}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>{kFormatter(stars)}</p>
                                    <AiFillStar color={'#FDD231'} size={22} />
                                </div>
                            </div>
                            <div style={{ textAlign: 'left', marginTop: 25 }}>
                                <a href={url} target={'_blank'} style={{ fontSize: 20, fontWeight: 'bold', color: '#081F32', textDecoration: 'none' }}>{name}</a>
                                <p style={{ marginTop: 10, color: '#374A59' }}>{description}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', height: 5, alignItems: 'center', marginBottom: 5 }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={avatar} style={{ height: 26, width: 26, borderRadius: 26, border: "0.5px solid #A6A8A4" }} />
                                <p style={{ color: '#007AE9', cursor: 'pointer', marginLeft: 5 }}>{author}</p>
                            </div>
                            <a href={url} target={'_blank'} style={{ color: '#007AE9', cursor: 'pointer', textDecoration: 'none' }}>Read more 🡢</a>
                        </div>
                    </div>
                </div>
            )
        })
    }

    const renderProgramLanguage = (language, color) => {
        switch (language) {
            case 'JavaScript':
                return <IoLogoJavascript color={color} size={20} />

            case 'Python':
                return <IoLogoPython color={color} size={20} />

            case 'Java':
                return <SiJava color={color} size={20} />

            case 'Go':
                return <img src={GoLangIcon} height={20} color={color} />

            case 'C++':
                return <SiCplusplus color={color} size={20} />

            case 'TypeScript':
                return <SiTypescript color={color} size={20} />

            case 'Jupyter Notebook':
                return <SiJupyter color={color} size={20} />

            case 'HTML':
                return <SiHtml5 color={color} size={20} />

            default:
                return <FiAlertOctagon color={color} size={20} />
        }
    }

    return (
        <Container>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto auto', gridGap: 30 }}>
                {renderGithubTrendingItem()}
            </div>
        </Container>
    )
}
