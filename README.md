<a name="readme-top"></a>

<h1 align="center">
  <br> All_about_Wowwee_Roboquad <br>
</h1>

<div align="center">

[![GitHub - All_about_Wowwee_Roboquad](https://img.shields.io/static/v1?label=GitHub&message=All_about_Wowwee_Roboquad&color=blue&logo=github)](https://github.com/Orel138/All_about_Wowwee_Roboquad "Go to GitHub repo")
[![stars - All_about_Wowwee_Roboquad](https://img.shields.io/github/stars/Orel138/All_about_Wowwee_Roboquad?style=social)](https://github.com/Orel138/All_about_Wowwee_Roboquad)
[![forks - All_about_Wowwee_Roboquad](https://img.shields.io/github/forks/Orel138/All_about_Wowwee_Roboquad?style=social)](https://github.com/Orel138/All_about_Wowwee_Roboquad)

[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://open.vscode.dev/Orel138/All_about_Wowwee_Roboquad)
[![license](https://custom-icon-badges.demolab.com/github/license/Orel138/All_about_Wowwee_Roboquad?logo=law&logoColor=white)](https://github.com/Orel138/All_about_Wowwee_Roboquad/blob/main/LICENSE "license MIT")
[![issues](https://custom-icon-badges.demolab.com/github/issues-raw/Orel138/All_about_Wowwee_Roboquad?logo=issue)](https://github.com/Orel138/All_about_Wowwee_Roboquad/issues "issues")
[![Use this template](https://img.shields.io/badge/Use_as_template-2ea44f?style=flat&color=blue)](https://github.com/Orel138/All_about_Wowwee_Roboquad/generate)

[![Wowwee](https://img.shields.io/badge/Wowwee-Roboquad-blue?style=flat&logo=wowwee)](https://www.wowwee.com/roboquad "Wowwee Roboquad")


</div>

<div align="center">
  <h4>
    <a href="#about">About</a> |
    <a href="#requirements">Requirements</a> |
    <a href="#installation">Installation</a> |
    <a href="#usage">Usage</a> |
    <a href="#references">References</a> |
    <a href="#license">License</a>
  </h4>
</div>

<div align="center">
  <sub>Built by
  <a href="https://github.com/Orel138">Orel138</a> and
  <a href="https://github.com/Orel138/All_about_Wowwee_Roboquad/graphs/contributors">contributors </a>
</div>
<br>

### A Comprehensive Guide to Wowwee Roboquad
This project serves as a comprehensive repository for the Wowwee Roboquad, including a remote control simulator, hardware schematics, technical documentation, and project ideas.

## Table of Contents

- [About](#about)
- [Architecture Overview](#architecture-overview)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [References](#references)
- [Contributing](#contributing)
- [License](#license)

## About

_All_about_Wowwee_Roboquad_ is a detailed project providing resources for the Wowwee Roboquad robot toy, including a simulator for its remote control, hardware schematics, technical documentation, and more.

This repository includes a web-based simulator that mimics the functionality of the original remote control, schematics for recreating the infrared communication hardware, and documentation on the infrared protocol and commands.

### Features
- **Remote Control Simulator**: A web interface to simulate the remote control of the Roboquad.
- **Hardware Documentation**: Includes PCB schematics and technical specifications.
- **Infrared Protocol Documentation**: Details the commands and modulation used by the original remote.
- **Project Ideas**: Suggestions for hacking and extending the capabilities of the Roboquad.
- **Example Projects**: Communication examples with STM32, Arduino, and ESP32.

### Flexibility and Compatibility
This project is designed to be compatible with various microcontroller platforms, enabling easy adaptation and integration with different hardware setups.

<p align="right"><a href="#readme-top">~~~~~ back to top ~~~~~</a></p>

## Architecture Overview

### Software Bill Of Materials
This Software Bill Of Materials (SBOM) itemizes the software components included in this package, detailing the copyright holder and licensing terms for each.

|   Component   |   Version |   Copyright |   License |
|  ---          |    :-:    |     :-:     |       --: |
|   Flask  |   2.1.1   |   Armin Ronacher/Pallets Projects |   [BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause) |
|   pyserial |   3.5   |   Chris Liechti |   [BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause) |
|   Web Interface |   -   |   Orel138 |   [MIT](https://opensource.org/licenses/MIT) |

<p align="right"><a href="#readme-top">~~~~~ back to top ~~~~~</a></p>

## Requirements

### Hardware
- Wowwee Roboquad
- Infrared LED and Receiver
- Microcontroller (e.g., STM32, Arduino, ESP32)

### Software
- Python 3.x
- Flask 2.x
- pyserial 3.x

<p align="right"><a href="#readme-top">~~~~~ back to top ~~~~~</a></p>

## Installation

To install _All_about_Wowwee_Roboquad_, follow these steps:

1. Clone the repository
   ```bash
   git clone https://github.com/Orel138/All_about_Wowwee_Roboquad.git
   ```
2. Navigate to the project directory
   ```bash
   cd All_about_Wowwee_Roboquad
   ```
3. Install the required Python packages.
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask application.
   ```bash
   python src/app.py
   ```
5. Open your web browser and navigate to `http://localhost:5000`.

<p align="right"><a href="#readme-top">~~~~~ back to top ~~~~~</a></p>

## Usage

- The web interface allows you to simulate the remote control functions of the Wowwee Roboquad.
- Use the buttons on the web interface to send commands to the robot.
- The application also supports network communication via UDP/TCP for integration with microcontrollers.

<p align="right"><a href="#readme-top">~~~~~ back to top ~~~~~</a></p>

## References
- Wowwee Roboquad official documentation
- Flask Documentation
- pyserial Documentation

## Contributing
We welcome your contributions to _All_about_Wowwee_Roboquad_.

To contribute:
1. Fork the repository.
2. Create a new branch: git checkout -b [branch-name].
3. Make your changes and commit them: git commit -m '[commit-message]'.
4. Push to the original branch: git push origin [project-name]/[location].
5. Create the pull request.

<p align="right"><a href="#readme-top">~~~~~ back to top ~~~~~</a></p>

### License

All_about_Wowwee_Roboquad is released under the [MIT license]() © [Orel138](https://github.com/Orel138).

<p align="right"><a href="#readme-top">~~~~~ back to top ~~~~~</a></p>

> [!TIP]
> I trust you'll find this project enjoyable. Should you appreciate the project, bestowing a small ⭐ on it is a meaningful gesture, signifying: **My efforts are recognized.** Your support would be greatly valued. _Many thanks!_
