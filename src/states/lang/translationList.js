import { useTranslation } from 'react-i18next';

export const tranlationList = () => {
    const {t} = useTranslation();

    return {
        header: {
            ai: t('ai'),
            differentFuture: t('differentFuture')
        },
        typesOfAi: {
            MlRoadmap: t('ML Roadmap'),
            Algebra: t('Algebra'),
            Network: t('Network'),
            Deep: t('Deep'),
            HelloFuture: t('Hello Future'),
            aiParaType: t('aiParaType'),
            moreInfo: t('more info'),
        },
        slider: {
            MixtrueWithAI: t('MixtrueWithAI'),  
            Technology: t('Technology'),   
            Industry: t('Industry'),
            Agriculture: t('Agriculture'),
            Mechanic: t('Mechanic'),
            Medical: t('Medical'),
            Bank: t('Bank'),
            IoT: t('IoT') ,  
            Sense: t('Sense'),
            Comprehend: t('Comprehend'),
            Learn: t('Learn'),
        },
        ai: {
            AiTitle: t('AiTitle'),  
            AiTestBtn: t('AiTestBtn'),   
            AiBriefCase: t('AiBriefCase'),
        },
        navigation: {
            BeyondFuture: t('Beyond Future'),  
            BetterWorld: t('Better World'),   
            Architecture: t('Architecture'),
        },
        BigBg: {
            bigbgTitle: t('bigbgTitle'),  
            bigbgPara: t('bigbgPara'),   
        },
        footer: {
            aboutProject: t('aboutProject'),  
            me: t('me'),   
        }
    }
} 