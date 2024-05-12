<div align="center">
<img src="bg-accent_rounded.png" height="100" />
</div>

<h1 align="center">Bloggios React Frontend</h1>

<div align="center">
<img src="https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square" />
</div>

<p align="center">
  <a href="https://github.com/Bloggios-Open-Source/auth-server/LICENSE" target="blank">
<img src="https://img.shields.io/github/license/Bloggios-Open-Source/auth-server?style=flat-square" alt="Bloggios-Open-Source licence" />
</a>
<a href="https://github.com/Bloggios-Open-Source/auth-server/fork" target="blank">
<img src="https://img.shields.io/github/forks/Bloggios-Open-Source/auth-server?style=flat-square" alt="Bloggios-Open-Source forks"/>
</a>
<a href="https://github.com/Bloggios-Open-Source/auth-server/stargazers" target="blank">
<img src="https://img.shields.io/github/stars/Bloggios-Open-Source/auth-server?style=flat-square" alt="Bloggios-Open-Source stars"/>
</a>
<a href="https://github.com/Bloggios-Open-Source/auth-server/issues" target="blank">
<img src="https://img.shields.io/github/issues/Bloggios-Open-Source/auth-server?style=flat-square" alt="Bloggios-Open-Source issues"/>
</a>
<a href="https://github.com/Bloggios-Open-Source/auth-server/pulls" target="blank">
<img src="https://img.shields.io/github/issues-pr/Bloggios-Open-Source/auth-server?style=flat-square" alt="Bloggios-Open-Source pull-requests"/>
</a>
</p>

### Introduction

Bloggios' frontend application is developed using React JS, specifically created with Create React App (CRA), alongside
essential dependencies such as Redux Toolkit and React Query. Despite being in its nascent stage, the project commenced
in May and is progressively evolving. This repository encompasses the comprehensive end-to-end codebase of the Bloggios
Application's frontend, inclusive of its admin panel functionality. For the backend infrastructure, corresponding
components are distributed across separate repositories. The authentication mechanism is housed within the "auth-server"
repository, while the API gateway, responsible for routing requests to designated microservices, resides in "
bloggios-cloud-gateway". Additionally, functionalities related to email notifications and other email-related tasks are
managed within a dedicated "email service" repository.

### Software Required

- Node Js and NPM
- VS Code

### 🍴 Fork and Clone the Repo

First, you need to fork the `bloggios-frontend` repo. You can do this by clicking the `Fork` button on the top right corner of
the repo. If you are new to forking, please watch this [YouTube Guide](https://www.youtube.com/watch?v=h8suY-Osn8Q) to
get started.

Once forked, you can clone the repo by clicking the `Clone or Download` button on the top right corner of the forked
repo.

Please change the directory after cloning the repository using the `cd <folder-name>` command.

> **Note:** Please do not remove and update the `package.json` and `package-lock.json` file from the resources and root folder
> respectively. If needed to update then please mention in the issue while raising the PR.

### Open Project

Next, open the project in your favourite IDE. We recommended using VS Code or WebStorm but you can use any.

### Install Dependencies

##### For VS Code
- Open the terminal or press Ctrl + Shift + ` on windows
- Or ⌃ + Shift + ` for Mac OS

Then type the below command in terminal and hit enter

```
npm install
```

## Developed Features

In this section you can find the developing or developed feature of application to take a track on find a bugs if any.
One can find a bug and resolved it of completely developed features.

> To ensure seamless collaboration and minimize potential conflicts, kindly update the FEATURES.md file whenever initiating work on a new feature or addressing a bug. This practice enhances project transparency and facilitates effective communication among contributors, thereby fostering a cohesive development environment. Thank you for your cooperation in maintaining project integrity.

### Steps to Start developing new feature

- Navigate to [Features.md](FEATURES.md) file.
- Check if your feature is conflicting or not
- Add your feature there by adding a new heading (Add your feature under particular route)
- Add all the issues representing your feature along with bugs
- Add route to that feature if there is no route then elaborate the feature
- Optional : Explain how did you developed that feature
- Add details of your and/or other contributors along with you to the contributors section.

Please refer this code for adding new feature

```
    ## Feature Title
    **Short summary on feature**
    - Issue Numbers
    > Feature Route (if any) or description
    
    **Description**
    Add Feature description upto 250 words
    Also let other users know how you implement it
    
    Thanks goes to these wonderful people for developing this feature
    
    <!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
    <!-- prettier-ignore-start -->
    <!-- markdownlint-disable -->
    <table>
        <tbody>
            <tr>
                <td align="center" valign="top" width="14.28%"><a href="https://github.com/<github-username>"><img src="<image link>" width="100px;" alt="<alt text>"/><br /><sub><b>{your name}</b></sub></a><br /><a href="https://github.com/<github-username>" title="Code">💻</a></td>
            </tr>
        </tbody>
    </table>
    
```

### Steps to fix a bug on developed feature

- Navigate to [Features.md](FEATURES.md) file.
- Find the feature of your bug using route or heading.
- If feature not found then add new heading for your bug under same route
- Create new issue for that bug and add there
- Optional : Explain how did you fixed that bug
- Add details of your and/or other contributors along with you to the contributors section.

Please refer this code for adding new bug

```
    ## Bug Title (Under same feature)
    **Short summary on bug**
    - Issue Number
    > Feature Route (if any) or description
    
    **Description**
    Add bug description upto 250 words
    Add explanation for bug fix
    
    Thanks goes to these wonderful people for fixing this bug
    
    <!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
    <!-- prettier-ignore-start -->
    <!-- markdownlint-disable -->
    <table>
        <tbody>
            <tr>
                <td align="center" valign="top" width="14.28%"><a href="https://github.com/<github-username>"><img src="<image link>" width="100px;" alt="<alt text>"/><br /><sub><b>{your name}</b></sub></a><br /><a href="https://github.com/<github-username>" title="Code">💻</a></td>
            </tr>
        </tbody>
    </table>
    
```

> We will soon introduce assets repository to add documentation on features and bugs.

## 🤝 Contributing to `Bloggios`

Any kind of positive contribution is welcome! Please help us to grow by contributing to the project.

If you wish to contribute, you can,

- Star Repositories Bloggios
- Suggest a Feature
- Test the application, and help it improve.
- Improve the app, fix bugs, etc.
- Improve documentation.
- Create content about Bloggios and share it with the world.

> Please read [`CONTRIBUTING`](CONTRIBUTING.md) for details on our [`CODE OF CONDUCT`](CODE_OF_CONDUCT.md), and the
> process for submitting pull requests to us.

🆕 New to Open Source? 💡 Follow this [guide](https://opensource.guide/how-to-contribute/) to jumpstart your Open Source
journey 🚀.

## 🙏 Support

We all need support and motivation. `Bloggios` is not an exception. Please give this project repositories a ⭐️ to
encourage and show that you liked it. Don't forget to leave a star ⭐️ before you move away.

If you found the app helpful, consider supporting us with a coffee.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rohit-zip"><img src="https://avatars.githubusercontent.com/u/75197401?v=4" width="100px;" alt="Rohit Parihar"/><br /><sub><b>Rohit Parihar</b></sub></a><br /><a href="https://github.com/rohit-zip" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>