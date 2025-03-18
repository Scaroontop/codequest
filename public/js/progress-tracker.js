class ProgressTracker {
    constructor() {
        this.streakDays = 0;
        this.lastLogin = null;
        this.dailyGoals = {
            challengesCompleted: 0,
            targetChallenges: 5
        };
    }

    // Track daily login streak
    updateStreak() {
        const today = new Date();
        const lastLogin = this.lastLogin ? new Date(this.lastLogin) : null;
        
        if (!lastLogin) {
            this.streakDays = 1;
        } else {
            const diffDays = Math.floor((today - lastLogin) / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                this.streakDays++;
            } else if (diffDays > 1) {
                this.streakDays = 1;
            }
        }
        
        this.lastLogin = today;
        this.saveProgress();
    }

    // Update daily goals
    updateDailyGoals(challengesCompleted) {
        this.dailyGoals.challengesCompleted = challengesCompleted;
        
        if (this.dailyGoals.challengesCompleted >= this.dailyGoals.targetChallenges) {
            this.awardDailyBonus();
        }
        
        this.saveProgress();
    }

    // Award bonus for completing daily goals
    awardDailyBonus() {
        // Add bonus points or rewards here
        console.log("Daily goals completed! Bonus awarded!");
    }

    // Save progress to localStorage
    saveProgress() {
        const progress = {
            streak: this.streakDays,
            lastLogin: this.lastLogin,
            dailyGoals: this.dailyGoals
        };
        localStorage.setItem('codeQuestStreak', JSON.stringify(progress));
    }

    // Load progress from localStorage
    loadProgress() {
        const saved = localStorage.getItem('codeQuestStreak');
        if (saved) {
            const progress = JSON.parse(saved);
            this.streakDays = progress.streak;
            this.lastLogin = progress.lastLogin;
            this.dailyGoals = progress.dailyGoals;
        }
    }
}
