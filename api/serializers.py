from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
	class Meta:
		model = Room
		fields = ('id', 'code', 'host', 'guests_can_pause', 'vote_to_skip', 'created_at')
