

class AccountingService:
	u"""
		お金の動きについて制御するサービス
	"""

	HOUR = 3600
	MINUTES = 60

	def conversion(self, wage, time):
		u"""
			時間をお金に換算する
			args:
				wage:
					賃金, int, worktime に乗算する
				time:
					勉強時間, str, e.g.("1:30:30")
			returns:
				稼いだ額, int
		"""
		seconds = _time_to_seconds(time)
		wage_per_seconds = wage / self.HOUR
		return seconds * wage_per_seconds

	def _time_to_seconds(self, time):
		h, m, s = map(int, time.split(':'))
		seconds = h * self.HOUR + m * self.MINUTES + s
		return seconds
