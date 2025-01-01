# Notes-CLI

A simple command-line and web-based notes application built with Node.js.


## Installation

1. Clone the repository:
    ```sh
    git clone <https://github.com/dper94/notes-CLI.git>
    cd <notes-CLI>
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

### Command-Line Interface

The application provides several commands to manage notes:

- Create a new note:
    ```sh
    note new <note> --tags <tag1,tag2,...>
    ```

- List all notes:
    ```sh
    note all
    ```

- Find notes by content:
    ```sh
    note find <filter>
    ```

- Remove a note by ID:
    ```sh
    note remove <id>
    ```

- Remove all notes:
    ```sh
    note clean
    ```

- Launch the web server to view notes:
    ```sh
    note web [port]
    ```

### Web Interface

To view notes in a web browser, run the following command:
```sh
note web [port]
