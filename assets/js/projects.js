<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kang Sura Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .projects-wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            max-width: 1200px;
        }
        .wrapper {
            width: 300px;
        }
        .card {
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            background-color: #ffffff;
        }
        .card__image {
            width: 100%;
            height: 150px;
            overflow: hidden;
        }
        .card__image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .card__content {
            padding: 15px;
        }
        .card__article h2 {
            font-size: 1.1em;
            margin: 0 0 10px;
        }
        .card__article h2 a {
            text-decoration: none;
            color: #333;
        }
        .paragraph-text-normal {
            font-size: 0.9em;
            margin: 10px 0;
            color: #666;
        }
        .card__meta {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
        }
        .project-technology {
            display: inline-block;
            background-color: #f1f1f1;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 0.8em;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 100px;
        }
    </style>
</head>
<body>

<div class="projects-wrapper" id="projects">
    <!-- JavaScript를 통해 프로젝트 카드가 렌더링됩니다. -->
</div>

<script>
    document.addEventListener("DOMContentLoaded", () => {
        render_projects('Published papers');
    });

    let render_projects = (slug) => {
        let projects_area = document.getElementById('projects');

        let projects_obj = [
            {
                image: 'assets/images/Korean.jpg',
                link: 'http://cogsociety.org/journal/thesis.asp',
                title: 'Effects of Remote Hand Coordination Training Intervention for Children with Developmental Disabilities: Single Case Study',
                technologies: ['Hand coordination', 'Rehabilitation', 'Telehealth'],
                description: "This study aimed to find out the effect of remote intervention using a hand function training application on the hand coordination skills of children with developmental disabilities.",
                categories: ['Published papers']
            },
            {
                image: 'assets/images/Special_Education_Research_Institute.jpg',
                link: 'https://cms.dankook.ac.kr/web/dkseri/-15?p_p_id=Bbs_WAR_bbsportlet&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-2&p_p_col_count=1&_Bbs_WAR_bbsportlet_sKeyType=title&_Bbs_WAR_bbsportlet_curPage=1&_Bbs_WAR_bbsportlet_action=view_message&_Bbs_WAR_bbsportlet_sKeyword=%EB%B0%9C%EB%8B%AC%EC%84%B1%ED%98%91%EC%9D%91%EC%9E%A5%EC%95%A0&_Bbs_WAR_bbsportlet_messageId=765365',
                title: 'A Systematic Review of the Effects of Handwriting Interventions in Children with Developmental Coordination Disorder',
                technologies: ['DCD', 'Handwriting', 'Systematic review'],
                description: "The purpose of this study was to review the literature on the effects of handwriting interventions in children with developmental coordination disorder (DCD) and investigate the interventions' effectiveness.",
                categories: ['Published papers']
            },
            {
                image: 'assets/images/frontiers.jpg',
                link: 'https://www.frontiersin.org/articles/10.3389/fpsyt.2022.963303/full',
                title: 'A Curtailed Task for Quantitative Evaluation of Visuomotor Adaptation in the Head-Mounted Display Virtual Reality Environment',
                technologies: ['Visuomotor adaptation', 'VR', 'Cerebellar ataxia'],
                description: "This study examines the feasibility of a visuomotor adaptation task in a VR environment and its application to the diagnosis and rehabilitation of cerebellar ataxia.",
                categories: ['Published papers']
            },
            {
                image: 'assets/images/KOT.png',
                link: 'https://scholar.kyobobook.co.kr/article/external/detail/38424/4050067650065',
                title: 'Development of an Online Cognitive-Motor Dual Task Program for Dementia Prevention in Community-Dwelling Older Adults: A Delphi Study',
                technologies: ['Dementia prevention', 'Cognitive-motor intervention', 'Dual task program'],
                description: "This study applied the Delphi method to develop a non-face-to-face cognitive-motor intervention program for dementia prevention in community-dwelling older adults.",
                categories: ['Published papers']
            },
            {
                image: 'assets/images/KOT.png',
                link: 'https://scholar.kyobobook.co.kr/article/external/detail/38424/4050067650238',
                title: 'A Study on Correlation of Types of Performance Error and Working Memory and Execution Function in the Virtual Reality Based Kitchen Task in the Elderly',
                technologies: ['Executive function', 'Kitchen task', 'VR', 'Performance error', 'Working memory'],
                description: "The aim of this study is to investigate the correlation between performance errors and cognitive function in VR-based kitchen tasks.",
                categories: ['Published papers']
            },
            {
                image: 'assets/images/Korean.jpg',
                link: 'http://cogsociety.org/journal/thesis.asp',
                title: 'A Systematic Review of Tablet-Based Evaluation for Visual Perception',
                technologies: ['Tablet-based', 'Visual perception', 'Systematic review'],
                description: "This study systematically reviewed the latest trends in tablet-based visual perception assessment tools to support development in this area.",
                categories: ['Published papers']
            },
            {
                image: 'assets/images/KOT.png',
                link: 'https://scholar.kyobobook.co.kr/article/external/detail/38424/4050067761855',
                title: 'A Systematic Review of Occupational Therapy Interventions for Alleviating Challenging Behavior in People With Developmental Disabilities',
                technologies: ['Autism', 'Challenging behavior', 'Systematic review'],
                description: "This study aimed to find the effects of occupational therapy (OT) as a way to alleviate challenging behaviors for persons with developmental disabilities.",
                categories: ['Published papers']
            },
            {
                image: 'assets/images/The_Korean_Society_of_Occupational_Therapy.png',
                link: 'https://scholar.kyobobook.co.kr/article/external/detail/38424/4050067650373',
                title: 'Item-Level Psychometrics of the Cognitive Impairment Screening Test(CIST)',
                technologies: ['Assessment tool', 'Cognitive assessment', 'Validity'],
                description: "This study aims to investigate the reliability and validity of Cognitive Impairment Screening (CIST).",
                categories: ['Published papers']
            },
            {
                image: 'assets/images/plos_one.png',
                link: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0306907',
                title: 'The Association Between Self-Rated Health, Number of Family Members, and Cognitive Function in Community-Dwelling Older Adults: Mediating Role of Depression',
                technologies: ['CIST', 'PHQ-9', 'Older adult'],
                description: "This study investigates the association between self-rated health, family size, and cognitive function with depression as a mediator.",
                categories: ['Published papers']
            },
            {
                image: 'assets/images/MDPI.png',
                link: 'https://www.mdpi.com/2227-9067/11/11/1291',
                title: 'Clinical Utility of Virtual Kitchen Errand Task for Children (VKET-C) as a Functional Cognition Evaluation for Children with Developmental Disabilities',
                technologies: ['Children', 'Functional cognition', 'VR Kitchen'],
                description: "This study examines the utility of a VR-based kitchen task to evaluate functional cognition in children with developmental disabilities.",
                categories: ['Published papers']
            },
            {
                image: 'assets/images/dongguk.png',
                link: 'https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=741252235b20dabfffe0bdc3ef48d419',
                title: 'Developing a Deep Learning Model for Automated Scoring of Digital Base TVMS-R (Test of Visual-Motor Skills-Revised)',
                technologies: ['Visual perception assessment', 'Automated scoring', 'Deep learning'],
                description: "This study explores the possibility of automating scoring for TVMS-R using a deep learning model based on transfer learning.",
                categories: ['Published papers']
            }
        ];

        let projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
        projects_area.innerHTML = projects.join('');
    };

    let project_mapper = (project) => {
        return `
            <div class="wrapper">
                <div class="card">
                    ${project.image ? 
                        `<div class="card__image">
                            <a href="${project.link}">
                                <img src="${project.image}" alt="Project Image">
                            </a>
                        </div>` : ''
                    }
                    <div class="card__content">
                        <article class="card__article">
                            <h2><a href="${project.link}">${project.title}</a></h2>
                            <p class="paragraph-text-normal">${project.description}</p>
                        </article>
                        <div class="card__meta">
                            ${project.technologies.map(tech => 
                                `<span class="project-technology">${tech}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    };
</script>

</body>
</html>
