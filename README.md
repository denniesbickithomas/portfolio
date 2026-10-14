# Dennies Bicki Thomas: Portfolio

A plain HTML/CSS site with no build step, hosted for free on GitHub Pages.

```
index.html                     Home: hero, story, experience, projects, skills, contact
projects/*.html                Six case-study pages
assets/css/style.css           All styling (colors are variables at the top)
assets/js/main.js              Dark mode, mobile menu
assets/img/headshot.jpg        Portrait
assets/img/projects/           Project images (see list below)
assets/Dennies_Bicki_Thomas_Resume.pdf
```

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server 8000` in this folder and visit http://localhost:8000.

## Deploy to GitHub Pages (free)

1. Create a GitHub account, if you don't have one.
2. Create a **new public repository** named exactly `<your-username>.github.io`. Leave it empty, with no README.
3. In this folder, run:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
4. On GitHub, open the repo and go to **Settings → Pages**. Set **Source: Deploy from a branch**, **Branch: `main` / `(root)`**, then click Save.
5. After about a minute the site is live at `https://<your-username>.github.io`.

To update the site later, edit the files, then run `git add -A && git commit -m "Update" && git push`.

Optional: you can use a custom domain such as `denniesthomas.com` (about $12/yr). Add it under Settings → Pages → Custom domain.

## Adding project images

Copy the PNGs from `portfolio_visuals/` into `assets/img/projects/`, keeping the original file names. Until a file is there, its figure is hidden on the page, so you'll never see a broken image.

Files the pages expect:

- capstone_03_problem.png, capstone_04_methodology.png, capstone_05_dashboard_project_view.png, capstone_06_dashboard_people_view.png, capstone_07_research_poster.png
- gentech_02_baseline_sigma_metrics.png, gentech_03_complexity_vs_cycle_time.png, gentech_04_xbar_r_control_chart.png, gentech_05_before_after_improvement.png, gentech_06_swimlane_full_res.png
- bank_churn_02_leakage_detection.png, bank_churn_03_random_forest_results.png, bank_churn_04_feature_importance.png, bank_churn_05_recommendations.png
- mailroom_cv_02_yolo_queue_detection.png, mailroom_cv_03_app_ui_mockup.png, mailroom_cv_04_rollout_timeline.png, mailroom_cv_05_validation_mae0.png, mailroom_cv_06_ui_example.png
- greenfleet_01_decision_tree.png, greenfleet_02_value_of_information.png, greenfleet_03_tornado_sensitivity.png, greenfleet_04_monte_carlo_results.png
- yelp_01_sentiment_distribution.png, yelp_02_model_performance.png, yelp_03_words_model_learned.png

**Only use the redacted capstone screenshots.** Don't publish client Sheet or Looker URLs, API credentials, or the stakeholder-interview document.

## Still to fill in

Search the project pages for `TODO (Dennies)`. Three case studies need one line on what you personally built:

- `projects/basecamp-dashboard.html`
- `projects/bank-churn.html`
- `projects/lean-six-sigma-gentech.html`
