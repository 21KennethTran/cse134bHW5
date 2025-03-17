export function getMyComponentCSS() {
    return `
        :host {
            --card-bg: white;
            --text-color: #333;
            --secondary-text-color: #555;
            --accent-color: #3498db; /* Updated accent color */
            --accent-bg: #e0e0e0;
            --border-radius: 8px;
            --padding: 1.5rem;
            --margin-bottom: 2rem;
            display: grid;
        }

        .project-card {
            background-color: var(--card-bg);
            padding: var(--padding);
            border-radius: var(--border-radius);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, background-color 0.3s ease;
            display: inline-block;
            flex-direction: column;
        }

        .project-card:hover {
            background-color: var(--accent-bg);
            transform: scale(1.02);
        }

        .project-title {
            margin-bottom: 0.5rem;
            color: var(--text-color);
        }

        .project-description {
            margin-bottom: 1rem;
            color: var(--secondary-text-color);
        }

        .read-more {
            text-decoration: none;
            color: var(--accent-color);
            font-weight: bold;
            padding: 0.5rem 0.5rem;
            border-radius: 5px;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .read-more:hover {
            color: white;
            background-color: color-mix(in srgb, #3498db 60%, #8e44ad 40%);
            transform: scale(1.05);
        }
    `;
}