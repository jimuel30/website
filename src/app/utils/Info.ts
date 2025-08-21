import { retry } from 'rxjs';
import { Experience } from './Experience';
import { Project } from './Project';
import { Social } from './Social';

export class InfoUtil {
  static getSocials(): Social[] {
    return [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/jimuel-cinco-b14191257/',
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrdlv1qle8ssb16zhv0dVmNpGUcLxqIlo-A&s',
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/share/1CiixdQTdC/',
        icon: 'https://cdn-icons-png.freepik.com/512/2496/2496095.png',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/jimuel30/',
        icon: 'https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png', // You can replace with icon class name or image path
      },
    ];
  }

  static getTechStack(): string[] {
    return [
      'Java',
      'SpringBoot',
      'Docker',
      'Restful API',
      'SQL',
      'Angular',
      'React',
      'HTML',
      'CSS',
      'Bootstrap',
      'Git',
      'Github',
      'Gitlab',
      'Sonarlint',
      'Azure',
      'PMD',
      'Postman',
      'Intellij',
      'DBeaver',
      'WinScp',
    ];
  }

  static getExperience(): Experience[] {
    return [
      {
        companyName: 'Hitachi Digital Payment Solutions Philippines Inc',
        companyIcon:
          'https://media.licdn.com/dms/image/v2/C560BAQFNN0J_KTTwnQ/company-logo_200_200/company-logo_200_200/0/1672743396542?e=2147483647&v=beta&t=WfXS4X8oogxyAvQsypZCK703nsWscoWM3iXpnfoapSI', // ← replace with actual icon path
        stayDuration: 'March 2025 – Present',
        position: 'Associate Software Engineer',
        deployments: [
          {
            projectName: 'Palawan Pay',
            proejctBanner:
              'data:image/png;base64,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', // ← replace with actual banner
          },
        ],
      },
      {
        companyName: 'MDI Novare',
        companyIcon:
          'https://media.licdn.com/dms/image/v2/D560BAQFySpsM9d5h0g/company-logo_200_200/B56Zg7r1n2HQBY-/0/1753348005356/mdinovare_logo?e=2147483647&v=beta&t=9juXsF4p1oBKdyLBibk9aZPYuLL_KaB0pMNEjIAHrnY', // ← replace with actual icon path
        stayDuration: 'November 2022 – March 2025',
        position: 'Software Engineer',
        deployments: [
          {
            projectName: 'BDO CMS AMS PPS',
            proejctBanner:
              'https://s3-symbol-logo.tradingview.com/bdo-unibank--600.png', // ← replace with actual banner
          },
        ],
      },
    ];
  }

  static getProjects(): Project[] {
    return [
      {
        name: 'Reddit Video Generator',
        icon: 'https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-reddit-square1-512.png',
        description:
          'Automatically generates videos from Reddit posts and comments, ideal for content creation and social media sharing.',
        demoUrl: 'https://github.com/jimuel30/reddit-video-maker',
        repoUrl: 'https://github.com/jimuel30/reddit-video-maker',
        liveUrl: 'https://github.com/jimuel30/reddit-video-maker',
      },
    ];
  }
}
