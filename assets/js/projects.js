$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'Korean_society_of_cognitive_rehabilitation.jpg',
            link: 'http://cogsociety.org/journal/thesis.asp',
            title: 'Effects of Remote Hand Coordination Training Intervention for Children with Developmental Disabilities: Single Case Study',
            technologies: ['Hand coordination', 'Rehabilitation for motor development', 'Telehealth'],
            description: "This study aimed to find out the effect of remote intervention using a hand function training application on the hand coordination skills of children with developmental disabilities. ",
            categories: ['Published papers']
        },
        {
            image: 'assets/images/Special Education Research Institute.jpg',
            link: 'https://cms.dankook.ac.kr/web/dkseri/-15?p_p_id=Bbs_WAR_bbsportlet&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-2&p_p_col_count=1&_Bbs_WAR_bbsportlet_sKeyType=title&_Bbs_WAR_bbsportlet_curPage=1&_Bbs_WAR_bbsportlet_action=view_message&_Bbs_WAR_bbsportlet_sKeyword=%EB%B0%9C%EB%8B%AC%EC%84%B1%ED%98%91%EC%9D%91%EC%9E%A5%EC%95%A0&_Bbs_WAR_bbsportlet_messageId=765365',
            title: 'A Systematic Review of the Effects of Handwriting Interventions in Children with Developmental Coordination Disorder',
            technologies: ['DCD', 'Handwriting', 'Systematic review'],
            description: "The purpose of this study was to review the literature on the effects of handwriting interventions inchildren with developmental coordination disorder (DCD) and investigate the interventions‘ effectiveness.",
            categories: ['Published papers']
        },
        {
            image: 'assets/images/frontiers.jpg',
            link: 'https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2022.963303/full',
            title: 'A curtailed task for quantitative evaluation of visuomotor adaptation in the head-mounted display virtual reality environment',
            technologies: ['Visuomotor adaptation', 'VR', 'cerebellar ataxia'],
            description: "Overall, we would examine the feasibility of creating a visuomotor adaptation task in the HMD-VR environment and investigate if it is applicable to diagnosis of cerebellar ataxia and rehabilitation for visuomotor adaptation.",
            categories: ['Published papers']
        },
        {
            image: 'assets/images/The_Korean_Society_of_Occupational_Therapy.png',
            link: 'https://scholar.kyobobook.co.kr/article/external/detail/38424/4050067650065',
            title: 'Development of a Online Cognitive-motor Dual Task Program for Dementia Prevention in Community-Dwelling Older Adults: A Delphi Study ',
            technologies: ['Dementia prevention program', 'Cognitive-motor intervention program', 'Dual task program'],
            description: "This study applied the Delphi method to develop a non-face-to-face cognitive-motor intervention program for the prevention of dementia in healthy community-dwelling older adults.",
            categories: ['Published papers']
        },
        {
            image: 'assets/images/The_Korean_Society_of_Occupational_Therapy.png',
            link: 'https://scholar.kyobobook.co.kr/article/external/detail/38424/4050067650238',
            title: 'A Study on Correlation of Types of Performance Error and Working Memory and Execution Function in the Virtual Reality Based Kitchen Task in the Elderly',
            technologies: ['Executive function', 'Kitchen task', 'VR', 'Performance error', 'Working memory'],
            description: "The aim of this study is to investigate the correlation between the types of performance errors and cognitive function when conducting virtual reality (VR) based kitchen tasks.",
            categories: ['Published papers']
        },
        {
            image: 'assets/images/Korean_society_of_cognitive_rehabilitation.jpg',
            link: 'http://cogsociety.org/journal/thesis.asp',
            title: 'A Systematic Review of Tablet based Evaluation for Visual Perception',
            technologies: ['Tablet-based', 'Visual perception', ' Systematic review'],
            description: "This study systematically reviewed the latest research trends on tabletbased visual perception assessment tools to provide the basis for development of tablet-based evaluation.",
            categories: ['Published papers']
        },
        {
            image: 'assets/images/The_Korean_Society_of_Occupational_Therapy.png',
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
            description: "This study aims to investigate the reliability and validity of Cognitive Impairment Screening(CIST).",
            categories: ['Published papers']
        },
        {
            image: 'assets/images/plos_one.png',
            link: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0306907',
            title: 'The association between self-rated health, number of family members, and cognitive function in community-dwelling older adults: Mediating role of depression',
            technologies: ['CIST', 'PHQ-9', 'Older adult'],
            description: "Our study aimed to investigate research hypotheses, including 1) self-rated health is associated with the cognitive function through depression, 2) the number of family members is associated with cognitive function through depression, and 3) the depression is associated with cognitive function.",
            categories: ['Published papers']
        },
        {
            image: 'assets/images/MDPI.png',
            link: 'https://www.mdpi.com/2227-9067/11/11/1291',
            title: 'Clinical Utility of Virtual Kitchen Errand Task for Children (VKET-C) as a Functional Cognition Evaluation for Children with Developmental Disabilities',
            technologies: ['Children', 'Functional cognition', 'VR Kitchen'],
            description: "This study aimed to apply a VR-based kitchen errand task to TD children and children with DDs and analyze the performance errors observed during the kitchen errand task.",
            categories: ['Published papers']
        },
        {
            image: 'assets/images/dongguk.png',
            link: 'https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=741252235b20dabfffe0bdc3ef48d419',
            title: 'Developing a deep learning model for automated scoring of digital base TMVS-R(Test of Visual-Motor Skills-Revised)',
            technologies: ['Visual perception assessment', 'Automated scoring', 'Deep learning'],
            description: "This study aimed to explore the possibility of automatic scoring of TVMS-R by applying transfer learning to a deep learning model based on tablet-based TVMS-R collected data to a CNN-based ResNet-18 model pre-trained on IMAGENET data.",
            categories: ['Published papers']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
