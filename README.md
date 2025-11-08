# 🛒 KULTUREPOP E-COMMERCE PLATFORM

### Project Status: Development & Integration

---

## 🌳 1. Git Workflow Policy

We use a **Feature Branch Workflow** (simplified Git Flow).

* **`main`**: Always stable, production-ready code. **No direct pushes allowed.**
* **`develop`**: The primary branch for all new features and integration before release.

All work is done on the **`develop`** branch or a feature branch branched off of `develop`.

---

## 🛠️ 2. Essential Git Commands (While in VS Code)

Use the VS Code **Terminal** (`Ctrl + \``) for these commands.

### A. Starting a New Feature 🚀

Always start by ensuring your `develop` branch is up-to-date with the remote:

| Command | Purpose |
| :--- | :--- |
| `git checkout develop` | Switch to the development branch. |
| `git pull origin develop` | Download the latest changes from GitHub. |
| `git checkout -b feature/name` | **Create a new feature branch** off of `develop` (e.g., `feature/login`). |

### B. Daily Work and Committing Changes 💾

| Command | Purpose |
| :--- | :--- |
| `git status` | Check which files are modified or ready to be committed. |
| `git add .` | Stage **all** modified files for the next commit. |
| `git commit -m "feat: short description"` | Save the staged changes locally with a descriptive message. |
| `git push` | Send your local commits from your feature branch to GitHub. |

### C. Merging a Feature into `develop` (Local Steps) 🌿

Once a feature is complete on a branch (e.g., `feature/login`):

| Command | Purpose |
| :--- | :--- |
| `git checkout develop` | Switch back to the integration branch. |
| `git pull origin develop` | Pull latest remote changes (to prevent conflicts). |
| `git merge feature/name` | Merge the finished feature into the local `develop` branch. |
| `git push origin develop` | Send the merged code back to GitHub. |

### D. Releasing to `main` (Via GitHub Pull Request) 🔒

* We use a Pull Request (PR) to merge stable code into `main`.
* Go to **GitHub** and create a **Pull Request** from **`develop`** into **`main`**.
* Review the changes and click **Merge pull request**.