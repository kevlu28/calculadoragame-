function calculateReward() {
    const missions = parseInt(document.getElementById('missions').value);
    const enemies = parseInt(document.getElementById('enemies').value);
    const rewardType = document.getElementById('rewardType').value
    const rewardsPerMission = {
        gold: 100,
        gems: 5,
        xp: 500
    };
    const rewardsPerEnemy = {
        gold: 10,
        gems: 1,
        xp: 100
    };
    const totalReward = (missions * rewardsPerMission[rewardType]) + (enemies * rewardsPerEnemy[rewardType]);
    document.getElementById('result').innerText = `Recompensa total: ${totalReward}`;
}
